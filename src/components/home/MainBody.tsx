import React from "react";
import  Container  from "react-bootstrap/Container";

type Props = { 
    gradient: string
}
type Ref = HTMLHeadElement

const MainBody: React.ForwardRefRenderFunction<Ref, Props> = (props, ref) => {
    return(
            <div className="bg-light p-5 rounded-lg m-3">
            jumbotron
            </div>
    )
}

export default MainBody
