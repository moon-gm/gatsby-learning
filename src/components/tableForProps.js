import React from 'react'

const TableForProps =({tableData}) => {
	return (
		<div className="table-box">
			<table>
				<thead>
					<tr>
						<th>
							Props名
						</th>
						<th>
							役割
						</th>
					</tr>
				</thead>
				{
					tableData.map(item => {
						return (
							<tbody key={item.propsName}>
								<tr>
									<td>
										{item.propsName}
									</td>
									<td>
										{item.roll}
									</td>
								</tr>
							</tbody>
						);
					})
				}
			</table>
		</div>
	);
}
export default TableForProps
