/*jshint esversion: 6 */
/*jshint -W030 */
const App = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item active" aria-current="true">An active item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
        </ul>
    )
};

ReactDOM.render(<App />, document.getElementById('app'));