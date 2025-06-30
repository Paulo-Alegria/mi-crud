import React, { useState, useEffect } from "react";

function Form({ addOrUpdateItem, itemToEdit }) {
    const [nombre, setNombre] = useState("");
    const [asignatura, setAsignatura] = useState("");
    const [promedio, setPromedio] = useState("");

    useEffect(() => {
        if (itemToEdit) {
            setNombre(itemToEdit.nombre);
            setAsignatura(itemToEdit.asignatura);
            setPromedio(itemToEdit.promedio);
        } else {
            setNombre("");
            setAsignatura("");
            setPromedio("");
        }
    }, [itemToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            nombre.trim() &&
            asignatura.trim() &&
            promedio !== "" &&
            !isNaN(promedio) &&
            Number(promedio) >= 0 &&
            Number(promedio) <= 7
        ) {
            addOrUpdateItem({
                nombre,
                asignatura,
                promedio: Number(promedio),
            });
            setNombre("");
            setAsignatura("");
            setPromedio("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="eval-form">
            <label>
                Nombre del Alumno:
                <input
                    type="text"
                    placeholder="Ej: Juan Pérez"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
            </label>
            <label>
                Asignatura:
                <input
                    type="text"
                    placeholder="Ej: Matemáticas"
                    value={asignatura}
                    onChange={(e) => setAsignatura(e.target.value)}
                    required
                />
            </label>
            <label>
                Promedio (0.0 - 7.0):
                <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="7"
                    placeholder="Ej: 5.5"
                    value={promedio}
                    onChange={(e) => setPromedio(e.target.value)}
                    required
                />
            </label>
            <button type="submit" className="btn-primary">
                {itemToEdit ? "Actualizar Evaluación" : "Agregar Evaluación"}
            </button>
        </form>
    );
}

export default Form;