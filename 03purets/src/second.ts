

interface Takephoto {
    cameraMode: string
    filter: string
    burst: number
}

// class inheriting the properties from the interface

class Instagram implements Takephoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) { }
}