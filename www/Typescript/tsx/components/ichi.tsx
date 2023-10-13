import React, { useState, useEffect, useRef } from 'react';
import '../stylecheets/widgetstyle.sass';
import { io } from 'socket.io-client';

const useInterval = (callback: Function, delay?: number) => {
    useEffect(() => {
        const interval = setInterval(() => callback(), delay || 0);
        return () => clearInterval(interval);
    }, [callback, delay]);
}

export const IchiWidgetHead = () => {
    const sensorData = useRef([0, 0, 0])
    const sensorData2 = useRef([0, 0, 0])
    const [sensorData3, setSensorData3] = useState([0, 0, 0])
    const sensorCount = useRef(0)
    const timeResolution = 10, timeMeasurement = 500;
    const [socketMessage, setSocketMessage] = useState("none")

    const socket = useRef(null)
    const soketSend = () => {
        socket.current.on('test', () => { })
        setSocketMessage("")
    }
    useEffect(() => {
        socket.current = io(location.href)
        socket.current.on('connect', () => { });
    //    socket.current.emit('my event', { data: 'I\'m connected!' });
        return () => { socket.current.disconnect(); };
    }, []);


    const browserData = () => {
        return "ブラウザ⇒" + window.navigator.userAgent;
    }
    useEffect(() => {
        window.addEventListener("devicemotion", (dat) => {
            sensorData.current = [dat.accelerationIncludingGravity.x, dat.accelerationIncludingGravity.y, dat.accelerationIncludingGravity.z]
        })
    }, [])
    useInterval(() => {
        sensorData2.current = [
            sensorData.current[0] + sensorData2.current[0],
            sensorData.current[1] + sensorData2.current[1],
            sensorData.current[2] + sensorData2.current[2]]
        sensorCount.current = sensorCount.current + timeResolution
        if (sensorCount.current > timeMeasurement) {
            setSensorData3([
                sensorData2.current[0] * timeResolution / timeMeasurement,
                sensorData2.current[1] * timeResolution / timeMeasurement,
                sensorData2.current[2] * timeResolution / timeMeasurement])
            sensorData2.current = [0, 0, 0]
            sensorCount.current = 0
        }
    }, timeResolution)
    return (
        <div id="Ichi-widget-head">
            <div className="row p-1 px-3 ftcol">
                <div className="col-sm-12 col-lg-8 p-1">
                    <div className="d-flex justify-content-center justify-content-lg-start">
                        <a className="a-nolink" onClick={(evt) => { window.location.href = "https://pby-tlnesjcoqq-an.a.run.app/" }}>
                            <h2 className="slidein-2 btn-push" style={{ fontFamily: "Impact", color: "indigo" }}>
                                <i className="fas fa-book mr-1"></i>工事中des
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
                        {"加速度センサー⇒" + "x=" + sensorData3[0].toFixed(4) +
                            " y=" + sensorData3[1].toFixed(4) + " z=" + sensorData3[2].toFixed(4)
                        }<br />
                    </div>
                    <div className="d-flex justify-content-center" style={{ fontFamily: "Courier", color: "darkslategray" }}>
                        <button className="input-group-append btn btn-outline-primary btn-lg" id="index_send_button"
                            onClick={() => { soketSend(); }}>
                            <i className="fas fa-search mr-1"></i>send
                        </button><br />
                        {"socketMessage⇒" + socketMessage}<br />
                    </div>
                </div>
            </div>
        </div>
    );
}