from fastapi import FastAPI,UploadFile
from typing import Annotated
from fastapi.middleware.cors import CORSMiddleware
from PyPDF2 import PdfReader
import io

app = FastAPI()

origins = [
    "http://localhost:3000",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allow only specified origins
    allow_credentials=True,  # Allow cookies to be included in requests
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all HTTP headers
)

@app.post("/accepting_file")
async def get_file(file : UploadFile):
    if not file:
        print("File not detected")
    else:
        file_bytes = await file.read()
        pdf_reader = PdfReader(io.BytesIO(file_bytes))        
        print(pdf_reader.pages[0].extract_text())