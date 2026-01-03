'use client';

import { RefObject, useRef } from 'react';

export default function Page() {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const audioRef = useRef<HTMLAudioElement | null>(null);

	const handlePlay = (reference: RefObject<HTMLMediaElement | null>) => () => {
		if (!reference.current) return;

		reference.current.currentTime = 0;
		reference.current.play();
	}

	return <section className="center Pad">
		<h2>About us</h2>
		<p>Evar is about extraterestial space</p>
		<p>A mix of 'evolution' and 'variable'</p>

		<br /><br />
		<img src="./img/EvarTextLogo.svg" />
		<br />
		<audio ref={audioRef} src="./evar.mp3" />
		<div className='bg-l4' style={{ display: "inline-block", padding: 8, borderRadius: "var(--borderRadius)" }} onClick={handlePlay(audioRef)}><p>Play Jingle</p></div>
		<video ref={videoRef} src="./evar.mp4" playsInline={true} onClick={handlePlay(videoRef)} muted={false} />
		<br />
		<div className='bg-l4' style={{ display: "inline-block", padding: 8, borderRadius: "var(--borderRadius)" }} onClick={handlePlay(videoRef)}><p>Play Multimediamarke</p></div>
	</section>
}