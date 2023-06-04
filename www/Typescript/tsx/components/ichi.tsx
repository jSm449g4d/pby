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
    const [sensorData3, setSensorData3] = useState([0, 0, 0])
    const [sensorCount, setSensorCount] = useState(0)
    const [aCInterval, setACInterval] = useState(null)
    const browserData = () => {
        return "ブラウザ⇒" + window.navigator.userAgent;
    }
    const startAccelerationCounting = () => {
        if (aCInterval != null) return
        window.addEventListener("devicemotion", (dat) => {
            setSensorData([dat.accelerationIncludingGravity.x, dat.accelerationIncludingGravity.y, dat.accelerationIncludingGravity.z])
        });
        const interval = setInterval(() => {
            setSensorData2([sensorData[0] + sensorData2[0], sensorData[1] + sensorData2[1], sensorData[2] + sensorData2[2]])
            setSensorCount(sensorCount + 10)
            if (sensorCount > 1000) {
                setSensorData3([sensorData2[0], sensorData2[1], sensorData2[2]])
                setSensorData2([0, 0, 0])
                setSensorCount(0)
            }
        }, 10)
        setACInterval(interval)
    }
    const closeAccelerationCounting = () => {
        if (aCInterval != null) { clearInterval(aCInterval); setACInterval(null); }
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
                        {"加速度センサー⇒" + "x=" + sensorData3[0] + " y=" + sensorData3[1] + " z=" + sensorData3[2]}<br />
                    </div>
                    <button className="input-group-append btn btn-outline-primary btn-lg" id="index_2_button"
                        onClick={() => { startAccelerationCounting() }}>
                        <i className="fas fa-search mr-1"></i>開始
                    </button>
                    <button className="input-group-append btn btn-outline-secondary btn-lg" id="index_3_button"
                        onClick={() => { closeAccelerationCounting() }}>
                        <i className="fas fa-search mr-1"></i>終了
                    </button>
                </div>
            </div>
        </div>
    );
}