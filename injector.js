const oldWS = WebSocket;
WebSocket = function (where) {
    const socket = new oldWS("wss://clouddata.turbowarp.org");
    return socket;
}