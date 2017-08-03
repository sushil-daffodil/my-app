import React from  "react"

export default class Members extends React.Component {

    render() {
        let {data} = this.props;
        return <div>
            <ul>
            {data.map((row, index) => {
                return <li onClick={()=>{
                    this.props.history.push({
                        pathname: "/home/member/member-detail",
                        hash: row.name,
                        state: {
                            info: row
                        }
                    });
                }} key ={"__key__"+index}>
                    {row.name}
                </li>;
            })}
            </ul>
        </div>;
    }
}