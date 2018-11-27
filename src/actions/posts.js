/*
Aqui ficam as acoes relativas aos POSTS, que sao enviadas ao reducer junto com o state

Em cada acao ficam objetos planos, dos valores que serão enviados via parametro usando as funcoes, tipo:

No componente tem o dispatch :

dispatch(removePost({ id: props.post.id }));

A funcao removePost, mora aqui no arquivo de actions, ele contém :

1- a funcao removePost()
2- o parametro passado para funcao ({id} = {}), onde {id} = {} significa se não enviar valor 
para o parametro id o valor default é {} objeto vazio
3- dentro da funcao tempos o type, que vai servir para linkar a funcao action com o reducer
4- o valor que vai ser usado para adicao, edicao ou exclusao.

Actions é tipo local que o dispatch manda a informacao primeiro via paramtro, depois vai para o reducer junto com state

*/

import uuid from 'uuid';

// ACTION - ADD_POST
export const addPost = (
  {
    title = '',
    category = '',
    content = '',
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_POST',
  post: {
    id: uuid(),
    title,
    category,
    content,
    createdAt
  }
});

export const removePost = ({ id } = {}) => ({
  type: 'REMOVE_POST',
  id
});

export const editPost = (id, updates) => ({
  type: 'EDIT_POST',
  id,
  updates
});