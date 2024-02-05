const io = require("socket.io")(3000, { cors: { origin: "http://localhost:3001", method: ["GET", "POST"] } })

io.on("connection", (socket) => {
    console.log("A user connected")
    socket.on("message", (message, roomName) => {
        if (roomName.length) {
            io.to(roomName).emit("message", message)
        }
    })

    socket.on("disconnect", () => {
        console.log("User disconnected")
    })

    socket.on("joinRoom", (roomName) => {
        console.log("joining room: " + roomName)
        socket.join(roomName)
    })
})

console.log("Hello")