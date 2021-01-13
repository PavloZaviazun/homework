export const Contacts = () => {

    return (
        <div className={"contacts"}>
            <div><h4>График работы Call-центра </h4></div>
            <div className={"div-phone-number"}>
                <div className={"phone-number"}>+38 044 537-02-22</div>
                <div className={"phone-number"}>+38 044 537-02-22</div>
            </div>
            <div className={"schedule"}>
                <div className={"row"}>
                    <div className={"cell"}>В будние</div>
                    <div className={"cell"}>с 08:00 до 21:00</div>
                </div>
                <div className={"row"}>
                    <div className={"cell"}>Суббота</div>
                    <div className={"cell"}>с 09:00 до 20:00</div>
                </div>
                <div className={"row"}>
                    <div className={"cell"}>Воскресенье</div>
                    <div className={"cell"}>с 10:00 до 19:00</div>
                </div>
            </div>
        </div>

    )
}
