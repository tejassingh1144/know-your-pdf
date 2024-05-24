from fastapi import FastAPI, File, Form, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",  # Add your frontend URL here
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["Authorization", "Content-Type"],
)

class Prompt(BaseModel):
    prompt : str


@app.post('/')
async def root(prompt : Prompt):
    print(prompt)
    # return {'message' : 'received'}

@app.post("/upload")
async def upload_file(pdf: UploadFile = File(...)):
    contents = await pdf.read()
    print(contents)
    # return {"filename": file.filename, "username": username, "file_size": len(contents)}