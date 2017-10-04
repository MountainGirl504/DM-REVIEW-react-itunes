import React from 'react'


export default function Results(props) {
	return (

			//04: plug each prop into it's appropriate table cell (<td>)
			<tr>
				<td>
					<button>
						<a href = {props.preview}target="_blank">Play</a>
					</button>
				</td>
				<td>{props.song}</td>
				<td></td>
				<td></td>
				<td><img alt="Album Cover"/></td>
				<td></td>
				<td>$</td>
				<td>$</td>
			</tr>
	)
}