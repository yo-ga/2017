import React, { Component } from 'react'
import Row from './row.jsx'
import Timecol from './timecol.jsx'
import Col from './col.jsx'
import { open as fancybox } from 'stores/fancybox.js'
import makeContent from './makeContent.jsx'

export default function(props) {
	const datas = props.datas
	const contentKeynote1 = makeContent(datas["09:10"]["R0"])
	const contentKeynote2 = makeContent(datas["10:10"]["R0"])
	return (
		<tbody>
			<tr>
				<th></th>
				<th>
					R2
					<div>
						<a href="#" target="blank" className="not-yet">共筆</a>
						<a href="#" target="blank" className="not-yet">直播</a>
					</div>
				</th>
				<th>
					R0
					<div>
						<a href="#" target="blank" className="not-yet">共筆</a>
						<a href="#" target="blank" className="not-yet">直播</a>
					</div>
				</th>
				<th>
					R1
					<div>
						<a href="#" target="blank" className="not-yet">共筆</a>
						<a href="#" target="blank" className="not-yet">直播</a>
					</div>
				</th>
				<th>
					R3
					<div>
						<a href="#" target="blank" className="not-yet">共筆</a>
					</div>
				</th>
			</tr>
			<tr>
				<Timecol start="0830" />
				<td colSpan="4"><div>入場時間</div></td>
			</tr>
			<tr>
				<Timecol start="0900" />
				<td colSpan="4"><div>開幕</div></td>
			</tr>
			<tr>
				<Timecol start="0910" />
				<td colSpan="4" onClick={() => { fancybox(contentKeynote1) }} className="clickable">
					<Col data={datas["09:10"]["R0"]} />
				</td>
			</tr>
			<tr>
				<Timecol start="1010" />
				<td colSpan="4" onClick={() => { fancybox(contentKeynote2) }} className="clickable">
					<Col data={datas["10:10"]["R0"]} />
				</td>
			</tr>
			<Row start="1110" data={datas["11:10"]} />
			<tr>
				<Timecol start="1150" />
				<td colSpan="4"><div>午餐</div></td>
			</tr>
			<tr>
				<Timecol start="1250" />
				<td colSpan="4"><div>論壇</div></td>
			</tr>
			<Row start="1440" data={datas["14:40"]} />
			<Row start="1455" data={datas["14:55"]} />
			<Row start="1510" data={datas["15:10"]} />
			<tr>
				<Timecol start="1520" />
				<td colSpan="4"><div>點心</div></td>
			</tr>
			<Row start="1600" data={datas["16:00"]} />
			<Row start="1650" data={datas["16:50"]} />
			<tr>
				<Timecol start="1730" />
				<td colSpan="4"><div>Lightning talk</div></td>
			</tr>
			<tr>
				<Timecol start="1820" />
				<td colSpan="4"><div>閉幕</div></td>
			</tr>
			<tr>
				<Timecol start="1840" end="2040" />
				<td colSpan="4"><div>會後交流</div></td>
			</tr>
		</tbody>
	)
}
