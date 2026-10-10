let ctx: AudioContext | null = null;

function getCtx() {
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    ctx = new AC();
  }
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

/** Synthesizes the Sacred FAAAH: a breathy "F" followed by a descending "AAAH" vowel. */
export function playFaah(intensity = 1) {
  try {
    const ac = getCtx();
    const now = ac.currentTime;
    const dur = 1.3 + intensity * 0.3;

    const master = ac.createGain();
    master.gain.value = 0.55;
    master.connect(ac.destination);

    // "F" — filtered noise burst
    const noiseBuf = ac.createBuffer(1, ac.sampleRate * 0.3, ac.sampleRate);
    const data = noiseBuf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    const noise = ac.createBufferSource();
    noise.buffer = noiseBuf;
    const hp = ac.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.value = 2500;
    const nGain = ac.createGain();
    nGain.gain.setValueAtTime(0, now);
    nGain.gain.linearRampToValueAtTime(0.35, now + 0.04);
    nGain.gain.linearRampToValueAtTime(0, now + 0.2);
    noise.connect(hp).connect(nGain).connect(master);
    noise.start(now);
    noise.stop(now + 0.3);

    // "AAAH" — sawtooth voice through vowel formants
    const start = now + 0.12;
    const osc = ac.createOscillator();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(330, start);
    osc.frequency.exponentialRampToValueAtTime(240, start + 0.25);
    osc.frequency.exponentialRampToValueAtTime(120, start + dur);

    // vibrato
    const lfo = ac.createOscillator();
    lfo.frequency.value = 5.5;
    const lfoGain = ac.createGain();
    lfoGain.gain.value = 6;
    lfo.connect(lfoGain).connect(osc.frequency);

    const vGain = ac.createGain();
    vGain.gain.setValueAtTime(0, start);
    vGain.gain.linearRampToValueAtTime(0.9, start + 0.05);
    vGain.gain.setValueAtTime(0.9, start + dur * 0.55);
    vGain.gain.exponentialRampToValueAtTime(0.001, start + dur);

    const formants = [
      { f: 800, q: 6, g: 1 },
      { f: 1200, q: 8, g: 0.6 },
      { f: 2600, q: 10, g: 0.25 },
    ];
    formants.forEach(({ f, q, g }) => {
      const bp = ac.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = f;
      bp.Q.value = q;
      const fg = ac.createGain();
      fg.gain.value = g * 2.2;
      osc.connect(bp).connect(fg).connect(vGain);
    });
    vGain.connect(master);

    osc.start(start);
    lfo.start(start);
    osc.stop(start + dur + 0.05);
    lfo.stop(start + dur + 0.05);
  } catch {
    // The Faahlord is silent on this device.
  }
}
