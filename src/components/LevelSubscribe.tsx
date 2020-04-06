import React from "react";

export const listLevels = [
    {
        name: "1",
        cost: "50",
        description: "Access to the show ",
        active: true
    },
    {
        name: "2",
        cost: "100",
        description: "All videos",
        active: false
    },
    {
        name: "3",
        cost: "150",
        description: "Special",
        active: false
    },
]

export const LevelSubscribe: React.FC = () => {
    return (
        <div className="row ">
            <div className="col s12 m4">
                <div className="card ">
                    <div className="card-content ">
                        <p className="bold">LEVEL SUBSCRIBE</p>
                    </div>
                    {listLevels.map((item, index) => (
                        <div className="card-action ">
                            <p className="bold">{item.name}</p>
                            <p >{item.cost} ₽ в месяц</p>
                            <p >{item.description}</p>
                            <a className="waves-effect btn waves-light orange avatarCard_user followed bold">
                                Follow
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}