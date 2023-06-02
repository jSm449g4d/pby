import React, { useState, useEffect } from 'react';
import '../stylecheets/widgetstyle.sass';

/*
const renewSensorData = () => {
    window.addEventListener("devicemotion", (dat) => {
        setSensorData([dat.accelerationIncludingGravity.x, dat.accelerationIncludingGravity.y, dat.accelerationIncludingGravity.z])
    });
}*/
const useInterval = (callback: Function, delay?: number) => {
    useEffect(() => {
        const interval = setInterval(() => callback(), delay || 0);
        return () => clearInterval(interval);
    }, [callback, delay]);
}

export const IchiWidgetHead = () => {
    const [sensorData, setSensorData] = useState([0, 0, 0])
    const [sensorData2, setSensorData2] = useState([0, 0, 0])
    const [countData, setCountData] = useState(0)
    const browserData = () => {
        return "ブラウザ⇒" + window.navigator.userAgent;
    }
    const renewSensorData = () => {
        window.addEventListener("devicemotion", (dat) => {
            setSensorData([dat.accelerationIncludingGravity.x, dat.accelerationIncludingGravity.y, dat.accelerationIncludingGravity.z])
        });
        setCountData(countData + 1)
    };
    const startAccelerationCounting = () => {
    }
    return (
        <div id="Ichi-widget-head">
            <div className="row p-1 px-3 ftcol">
                <div className="col-sm-12 col-lg-8 p-1">
                    <div className="d-flex justify-content-center justify-content-lg-start">
                        <a className="a-nolink" onClick={(evt) => { window.location.href = "https://pby-tlnesjcoqq-an.a.run.app/" }}>
                            <h2 className="slidein-2 btn-push" style={{ fontFamily: "Impact", color: "indigo" }}>
                                <i className="fas fa-book mr-1"></i>工事中
                            </h2>
                        </a>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-4 p-1">
                    <div className="d-flex justify-content-center justify-content-lg-end">
                        <h4 className="titlelogo">
                            工事中
                        </h4>
                    </div>
                </div>
                <div className="col-12 p-1">
                    <div className="d-flex justify-content-center" style={{ fontFamily: "Courier", color: "darkslategray" }}>
                        情報<br />
                        {browserData()}<br />
                        {"加速度センサー⇒" + "x=" + sensorData[0].toFixed(4) + " y=" + sensorData[1].toFixed(4) + " z=" + sensorData[2].toFixed(4) + " Count=" + countData}<br />
                    </div>
                    <button className="input-group-append btn btn-outline-primary btn-lg" id="index_kensaku_button"
                        onClick={() => { renewSensorData() }}>
                        <i className="fas fa-search mr-1"></i>開始
                    </button>
                </div>
            </div>
        </div>
    );
}

/*
                            {"加速度センサー⇒" + "x" + sensorData[0] + " y" + sensorData[1] + " z" + sensorData[2]}<br />
                        <button className="input-group-append btn btn-outline-primary btn-lg" id="index_kensaku_button"
                            onClick={() => { renewSensorData(); }}>
                            <i className="fas fa-search mr-1"></i>情報更新
                        </button> */