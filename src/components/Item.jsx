import React from 'react';

function getNotaTexto(promedio) {
    if (promedio >= 6.5) return { texto: "Destacado", clase: "badge destacado" };
    if (promedio >= 5.6) return { texto: "Buen trabajo", clase: "badge bueno" };
    if (promedio >= 4.0) return { texto: "Con mejora", clase: "badge mejora" };
    return { texto: "Deficiente", clase: "badge deficiente" };
}

function Item({ item, deleteItem, editItem }) {
    const nota = getNotaTexto(item.promedio);

    return (
        <li>
            <div className="item-info">
                <div>
                    <strong>Alumno: {item.nombre}</strong>
                </div>
                <div>
                    Asignatura: {item.asignatura}
                </div>
                <div>
                    Promedio: <span>{item.promedio}</span>
                </div>
                <div>
                    <span className={nota.clase}>{nota.texto}</span>
                </div>
            </div>
            <div className="item-actions">
                <button className="btn-editar" onClick={() => editItem(item.id)}>Editar</button>
                <button className="btn-eliminar" onClick={() => deleteItem(item.id)}>Eliminar</button>
            </div>
        </li>
    );
}

export default Item;