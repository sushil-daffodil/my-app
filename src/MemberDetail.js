import React from  "react"

export default class MemberDetail extends React.Component {

    render() {
        return <div>
            <span>
                name:{this.props.location.state.info.name}

            </span>
            <span>
                address:{this.props.location.state.info.address}

            </span>

        </div>;
    }
}