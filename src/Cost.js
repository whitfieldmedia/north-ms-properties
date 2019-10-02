import React from 'react';
import './assets/css/cost.css';

class Cost extends React.Component {
    render() {
        return (
            <div className="cost-section">
                <h2 className="cost-header"> Cost Approach </h2>
                <table className="big-table">
                    <tr className="light">
                        <th className="cost-table-header"> Item </th>
                        <th className="cost-table-header"> Cost </th>
                        <th className="cost-table-header"> Total </th>
                    </tr>
                    <tr className="dark">
                        <th> Sprinkler </th>
                        <td> 9,510 Sq.Ft. @ $1.00 </td>
                        <td> $9,510 </td>
                    </tr>
                    <tr className="light">
                        <th> Specialty Items </th>
                        <td> 9,510 Sq.Ft. @ $5.00 </td>
                        <td> $47,550 </td>
                    </tr>
                    <tr className="dark">
                        <th> Construction Supervision </th>
                        <td> 9,510 Sq.Ft. @ $25.50 </td>
                        <td> $242,505 </td>
                    </tr>
                    <tr className="light">
                        <th> Manufactured Home </th>
                        <td> 1,364 Sq.Ft. @ $48.75 </td>
                        <td> $66,495 </td>
                    </tr>
                    <tr className="dark">
                        <th> Estimated Cost, New, of Subject Improvements </th>
                        <td> </td>
                        <td> $1,778,295 </td>
                    </tr>
                    <tr className="light">
                        <th> Less </th>
                        <td> Physical Depreciation (10%) </td>
                        <td> -$177,830 </td>
                    </tr>
                    <tr className="dark">
                        <th> Depreciated Value of Subject Improvements </th>
                        <td> </td>
                        <td> $1,600,465 </td>
                    </tr>
                    <tr className="light">
                        <th> Plus </th>
                        <td> Depreciated Value of Site Improvements </td>
                        <td> $62,500 </td>
                    </tr>
                    <tr className="dark">
                        <th> Plus </th>
                        <td> Estimated Site Value </td>
                        <td> $202,475 </td>
                    </tr>
                    <tr className="light">
                        <td> </td>
                        <td> </td>
                        <td> $1,865,440 </td>
                    </tr>
                    <tr className="dark">
                        <td> </td>
                        <td> </td>
                        <td> or </td>
                    </tr>
                    <tr className="light">
                        <th> Indicated Value of Cost Approach </th>
                        <td> </td>
                        <td> $1,865,000 </td>
                    </tr>
                </table>
                <table className="small-table">
                    <tr className="light">
                        <th className="cost-table-header"> Item </th>
                        <th> Sprinkler </th>
                    </tr>
                    <tr className="light">
                        <th className="cost-table-header"> Cost </th>
                        <td> 9,510 Sq.Ft. @ $1.00 </td>
                    </tr>
                    <tr className="light">
                        <th className="cost-table-header"> Total </th>
                        <td> $9,510 </td>
                    </tr>
                    <tr className="dark">
                        <th className="cost-table-header"> Item </th>
                        <th> Specialty Items </th>
                    </tr>
                    <tr className="dark">
                        <th className="cost-table-header"> Cost </th>
                        <td> 9,510 Sq.Ft. @ $5.00 </td>
                    </tr>
                    <tr className="dark">
                        <th className="cost-table-header"> Total </th>
                        <td> $47,550 </td>
                    </tr>
                    <tr className="light">
                        <th className="cost-table-header"> Item </th>
                        <th> Construction Supervision </th>
                    </tr>
                    <tr className="light">
                        <th className="cost-table-header"> Cost </th>
                        <td> 9,510 Sq.Ft. @ $25.50 </td>
                    </tr>
                    <tr className="light">
                        <th className="cost-table-header"> Total </th>
                        <td> $242,505 </td>
                    </tr>
                    <tr className="dark">
                        <th className="cost-table-header"> Item </th>
                        <th> Manufactured Home </th>
                    </tr>
                    <tr className="dark">
                        <th className="cost-table-header"> Cost </th>
                        <td> 1,364 Sq.Ft. @ $48.75 </td>
                    </tr>
                    <tr className="dark">
                        <th className="cost-table-header"> Total </th>
                        <td> $66,495 </td>
                    </tr>
                    <tr className="light">
                        <th className="cost-table-header"> Item </th>
                        <th> Estimated Cost, New, of Subject Improvements </th>
                    </tr>
                    <tr className="light">
                        <th className="cost-table-header"> Total </th>
                        <td> $1,778,295 </td>
                    </tr>
                    <tr className="dark">
                        <th className="cost-table-header"> Item </th>
                        <th> Less </th>
                    </tr>
                    <tr className="dark">
                        <th className="cost-table-header"> Cost </th>
                        <td> Physical Depreciation (10%) </td>
                    </tr>
                    <tr className="dark">
                        <th className="cost-table-header"> Total </th>
                        <td> -$177,830 </td>
                    </tr>
                    <tr className="light">
                        <th className="cost-table-header"> Item </th>
                        <th> Depreciated Value of Subject Improvements </th>
                    </tr>
                    <tr className="light">
                        <th className="cost-table-header"> Total </th>
                        <td> $1,600,465 </td>
                    </tr>
                    <tr className="dark">
                        <th className="cost-table-header"> Item </th>
                        <th> Plus </th>
                    </tr>
                    <tr className="dark">
                        <th className="cost-table-header"> Cost </th>
                        <td> Depreciated Value of Site Improvements </td>
                    </tr>
                    <tr className="dark">
                        <th className="cost-table-header"> Total </th>
                        <td> $62,500 </td>
                    </tr>
                    <tr className="light">
                        <th className="cost-table-header"> Item </th>
                        <th> Plus </th>
                    </tr>
                    <tr className="light">
                        <th className="cost-table-header"> Cost </th>
                        <td> Estimated Site Value </td>
                    </tr>
                    <tr className="light">
                        <th className="cost-table-header"> Total </th>
                        <td> $202,475 </td>
                    </tr>
                    <tr className="dark">
                        <th className="cost-table-header"> Item </th>
                        <th> Indicated Value of Cost Approach </th>
                    </tr>
                    <tr className="light">
                        <th className="cost-table-header"> Total </th>
                        <td> $1,865,440 </td>
                    </tr>
                    <tr className="dark">
                        <th className="cost-table-header"> Total </th>
                        <td> or </td>
                    </tr>
                    <tr className="light">
                        <th className="cost-table-header"> Total </th>
                        <td> $1,865,000 </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Cost;