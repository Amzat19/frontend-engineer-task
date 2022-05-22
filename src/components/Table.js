import TableHeader from "./TableHeader";
import Catalog from "./Catalog";
import Circooles from "./Circooles";
import CommandR from "./CommandR";
import HourGlass from "./HourGlass";
import Layers from "./Layers";
import Quotient from "./Quotient";
import Sisyphus from "./Sisyphus";

const Table = () => {
    return (
        <table>
            <TableHeader/>
            <tbody>
                <Catalog/>
                <Circooles/>
                <CommandR/>
                <HourGlass/>
                <Layers/>
                <Quotient/>
                <Sisyphus/>
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={6}>
                        <div className="pagination-desktop">
                        <div className="pagination-buttons">
                            <button type="button" className="previous-button">Previous</button>
                            <button  type="button" className="next-button">Next</button>
                        </div>
                        <div className="pageCount">
                            <p>Page 1 of 10</p>
                        </div>
                        </div>
                    </td>
                </tr>
            </tfoot>
        </table>
    )
};

export default Table;