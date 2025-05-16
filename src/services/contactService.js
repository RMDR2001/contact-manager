import { config } from '../config/env';

/**
 * Obtiene todos los contactos
 * @returns {Promise<Array>} Lista de contactos
 */
export const getContacts = async () => {
  const response = await fetch(config.apiUrl);
  if (!response.ok) {
    throw new Error('Error al obtener los contactos');
  }
  return await response.json();
};

/**
 * Crea un nuevo contacto
 * @param {Object} contactData Datos del nuevo contacto
 * @returns {Promise<Object>} Contacto creado
 */
export const createContact = async (contactData) => {
  const response = await fetch(config.apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contactData)
  });

  if (!response.ok) {
    throw new Error('Error al crear el contacto');
  }

  return await response.json();
};

/**
 * Actualiza un contacto existente
 * @param {string} id ID del contacto
 * @param {Object} contactData Nuevos datos del contacto
 * @returns {Promise<Object>} Contacto actualizado
 */
export const updateContact = async (id, contactData) => {
  const response = await fetch(`${config.apiUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contactData)
  });

  if (!response.ok) {
    throw new Error('Error al actualizar el contacto');
  }

  return await response.json();
};

/**
 * Elimina un contacto
 * @param {string} id ID del contacto a eliminar
 * @returns {Promise<void>}
 */
export const deleteContact = async (id) => {
  const response = await fetch(`${config.apiUrl}/${id}`, {
    method: 'DELETE'
  });

  if (!response.ok) {
    throw new Error('Error al eliminar el contacto');
  }
};

/**
 * Maneja errores comunes de la API
 * @param {Error} error Error capturado
 * @returns {string} Mensaje de error formateado
 */
export const handleApiError = (error) => {
  if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
    return 'No se pudo conectar con el servidor. Verifica tu conexión.';
  }
  return error.message || 'Ocurrió un error inesperado';
};