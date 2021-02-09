
function General() {
    return (
        <div style={{marginTop: '5rem'}}>
            <div>
                <h2 className="ui icon center aligned header"><i aria-hidden="true" className="users circular icon"></i>
                    <div className="content">Utilisateurs</div>
                </h2>
            </div>
            <div className="ui three statistics"  style={{marginTop: '5rem'}}>
                <div className="ui statistic">
                    <div className="value" style={{color: '#7F58D5'}}>22</div>
                    <div className="label">Participants</div>
                </div>
                <div className="ui statistic">
                    <div className="value" style={{color: '#7F58D5'}}>35</div>
                    <div className="label">membres du public</div>
                </div>
                <div className="ui statistic">
                    <div className="value" style={{color: '#7F58D5'}}>50</div>
                    <div className="label">votes distribués</div>
                </div>
            </div>
        </div>
    )
}

export default General
