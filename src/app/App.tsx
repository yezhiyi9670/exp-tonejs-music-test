import React from 'react'
import * as Tone from 'tone'

export function App() {
	function helloTone() {
		//create a synth and connect it to the main output (your speakers)
		const synth = new Tone.Synth().toDestination()

		//play a middle 'C' for the duration of an 8th note
		synth.triggerAttackRelease(262, "8n")
	}
	
	return <>
		<p>Hello, world!</p>
		<button onClick={helloTone}>Hello Tone</button>
	</>
}
