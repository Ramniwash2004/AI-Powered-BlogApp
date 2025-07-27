import multer from "multer"
const upload = multer({strong:multer.diskStorage({})})

export default upload;