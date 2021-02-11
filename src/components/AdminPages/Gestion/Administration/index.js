import {useEffect, useState} from "react";

const GlobalAdministration = () => {
    const [firstConnection, setFirstConnection] = useState(true)

    useEffect(() => {


    })
    return (
        <div>
            <h1>Prix</h1>
            <div role="list" className="ui divided middle aligned list">
                <ListAward/>
            </div>
            <h1>Roles</h1>
            <div role="list" className="ui divided middle aligned list">
                <ListRole/>
            </div>
            <h1>Categories</h1>
            <div role="list" className="ui divided middle aligned list">
                <ListCategory/>
            </div>
        </div>
    )
}

const ListAward = () => {
    const [listAward, setListAward] = useState([])
    const [watcher, setWatcher] = useState(true)
    const [firstConnection, setFirstConnection] = useState(true)

    useEffect(() => {
        if (firstConnection){
            fetch('http://192.168.1.85:7070/api/award/getAllAwards', {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
                .then(res => {
                    return res.json()
                })
                .then((e) => {
                    setFirstConnection(false)
                    console.log(e)
                    if (e.status === 'success') {
                        let tab = []

                        for (let i = 0; i < e.result.length; i++) {
                            tab.push({key: e.result[i].id, text: e.result[i].name, value: e.result[i].name})
                        }
                        setListAward(tab)
                    }
                })
                .catch(e => console.error(e))
        }

    })

    return listAward.map((award) =>
        (
            <div role="listitem" className="item" key={award.key}>
                <div className="right floated content">
                    <button className="ui icon button green"><i aria-hidden="true" className="check icon"></i>
                    </button>
                    <button className="ui icon button red" onClick={() => {
                        let indexToDelete = listAward.findIndex((e) => e.text === award.text)
                        listAward.splice(indexToDelete, 1)
                        setListAward(listAward)
                        setWatcher(!watcher)
                    }}><i aria-hidden="true" className="close icon"></i>
                    </button>
                </div>
                <div className="content">{award.text}</div>
            </div>
        )
    )
}
const ListRole = () => {
    const [listRole, setListRole] = useState([])
    const [watcher, setWatcher] = useState(true)
    const [firstConnection, setFirstConnection] = useState(true)

    useEffect(() => {
        if (firstConnection){
            fetch('http://192.168.1.85:7070/api/role/getAllRoles', {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
                .then(res => {
                    return res.json()
                })
                .then((e) => {
                    console.log(e)

                    if (e.status === 'success' ) {
                        setFirstConnection(false)
                        let tab = []

                        for (let i = 0; i < e.result.length; i++) {
                            tab.push({key: e.result[i].id, text: e.result[i].name, value: e.result[i].name})
                        }
                        setListRole(tab)
                    }
                })
                .catch(e => console.error(e))
        }

    })

    return listRole.map((award) =>
        (
            <div role="listitem" className="item" key={award.key}>
                <div className="right floated content">
                    <button className="ui icon button green"><i aria-hidden="true" className="check icon"></i>
                    </button>
                    <button className="ui icon button red" onClick={() => {
                        let indexToDelete = listRole.findIndex((e) => e.text === award.text)
                        listRole.splice(indexToDelete, 1)
                        setListRole(listRole)
                        setWatcher(!watcher)
                    }}><i aria-hidden="true" className="close icon"></i>
                    </button>
                </div>
                <div className="content">{award.text}</div>
            </div>
        )
    )
}
const ListCategory = () => {
    const [listCategory, setListCategory] = useState([])
    const [watcher, setWatcher] = useState(true)
    const [firstConnection, setFirstConnection] = useState(true)

    useEffect(() => {
        if (firstConnection){
            fetch('http://192.168.1.85:7070/api/category/getAllCategories', {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
                .then(res => {
                    return res.json()
                })
                .then((e) => {
                    console.log(e)

                    if (e.status === 'success') {
                        setFirstConnection(false)
                        let tab = []

                        for (let i = 0; i < e.result.length; i++) {
                            tab.push({key: e.result[i].id, text: e.result[i].name, value: e.result[i].name})
                        }
                        setListCategory(tab)


                    }
                })
                .catch(e => console.error(e))
        }
    })

    return listCategory.map((award) =>
        (
            <div role="listitem" className="item" key={award.key}>
                <div className="right floated content">
                    <button className="ui icon button green"><i aria-hidden="true" className="check icon"></i>
                    </button>
                    <button className="ui icon button red" onClick={() => {
                        let indexToDelete = listCategory.findIndex((e) => e.text === award.text)
                        listCategory.splice(indexToDelete, 1)
                        setListCategory(listCategory)
                        setWatcher(!watcher)
                    }}><i aria-hidden="true" className="close icon"></i>
                    </button>
                </div>
                <div className="content">{award.text}</div>
            </div>
        )
    )
}

export default GlobalAdministration
