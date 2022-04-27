import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

export const Details = props => {
    const [item, setItem] = useState(props.location.state);

    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://cdn.vox-cdn.com/thumbor/bh61fIZ-xbxJcQCUzOhb5mGdZdw=/0x0:1536x864/1200x800/filters:focal(646x310:890x554)/cdn.vox-cdn.com/uploads/chorus_image/image/70728220/lego_star_wars_skywalker_saga_01_TALL.0.jpg" 
                        className="img-fluid rounded-start" alt={item.name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th scope="row">{Object.keys(item)[1]}</th>
                                    <td>{Object.values(item)[1]}</td>
                                </tr>
                                <tr>
                                    <th scope="row">{Object.keys(item)[2]}</th>
                                    <td>{Object.values(item)[2]}</td>
                                </tr>
                                <tr>
                                    <th scope="row">{Object.keys(item)[3]}</th>
                                    <td>{Object.values(item)[3]}</td>
                                </tr>
                                <tr>
                                    <th scope="row">{Object.keys(item)[4]}</th>
                                    <td>{Object.values(item)[4]}</td>
                                </tr>
                                <tr>
                                    <th scope="row">{Object.keys(item)[5]}</th>
                                    <td>{Object.values(item)[5]}</td>
                                </tr>
                                <tr>
                                    <th scope="row">{Object.keys(item)[6]}</th>
                                    <td>{Object.values(item)[6]}</td>
                                </tr>
                                <tr>
                                    <th scope="row">{Object.keys(item)[7]}</th>
                                    <td>{Object.values(item)[7]}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

Details.propTypes = {
    match: PropTypes.object
};