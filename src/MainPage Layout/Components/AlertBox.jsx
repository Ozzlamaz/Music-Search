function AlertBox({setAlert}) {

    return (
        <div className="alert alert-warning alert-dismissible mb-3 w-25 mx-auto" role="alert">
            <strong>Search Feild Can Not Be Empty</strong>
            <button onClick={() => setAlert(false)} type="button" className="btn-close"></button>
        </div>
    )
}
export default AlertBox