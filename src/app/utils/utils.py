from pathlib import Path
import json
from typing import Any

# Define o diretório de dados relativo ao arquivo atual
DATA_DIR = Path(__file__).resolve().parents[2] / "data"


def load_json(filename: str) -> Any:
    file_path = DATA_DIR / filename

    if not file_path.is_file():
        raise FileNotFoundError(f"Arquivo não encontrado: {file_path}")

    try:
        with file_path.open("r", encoding="utf-8") as file:
            return json.load(file)
    except json.JSONDecodeError as e:
        raise ValueError(f"Erro ao decodificar JSON: {e}")
