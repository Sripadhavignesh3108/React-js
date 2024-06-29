import Child from "./childComponent";

export default function Parent()
{
    let styles={color:"red"}
    return(
        <>
        <Child s={styles}></Child>
        </>
    )
}