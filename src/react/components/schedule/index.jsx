import React, { Component } from 'react'
import submissions from './submissions.json'
import SpecialEvents from './specialevents.jsx'
import Tablebody from './tablebody.jsx'

const bucket = {
	"09:10": {},
	"10:10": {},
	"11:10": {},
	"14:40": {},
	"14:55": {},
	"15:10": {},
	"16:00": {},
	"16:50": {},
}
submissions.forEach((data) => {
	const start = data.start.slice(11, 16)
	const room = data.room.slice(0, 2)
	if( !bucket[start] ) {
		console.error('Timetable key', start, 'not found')
		return
	}
	bucket[start][room] = data
})

export default class extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.active !== nextProps.active
	}

	render() {
		return (
			<div id="schedule-page" className={this.props.active ? 'active' : ''}>
				<h2>活動</h2>
				<SpecialEvents />
				<h2>議程</h2>
				<table>
					<Tablebody datas={bucket} />
				</table>
			</div>
		)
	}
}
