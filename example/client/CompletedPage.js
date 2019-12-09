import './common';
import React from 'react';
import {endpoints} from '@wildcard-api/client';
import renderPage from './renderPage';
import LoadingWrapper from './LoadingWrapper';
import Todo from './Todo';

renderPage(<CompletedPage/>);

function CompletedPage() {
  // We use our Wildcard endpoint to get the user's completed todos
  const fetchData = async () => await endpoints.getCompletedPageData();

  return (
    <LoadingWrapper fetchData={fetchData}>{
      ({data: {todos}, updateTodo}) => (
        <div>
          Completed todos:
          <div>
            {todos.map(todo =>
              <Todo todo={todo} updateTodo={updateTodo} key={todo.id}/>
            )}
          </div>
        </div>
      )
    }</LoadingWrapper>
  );
}
