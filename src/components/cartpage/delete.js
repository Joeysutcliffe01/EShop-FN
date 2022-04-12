// export function DeleteAllTodosButtons({
//     deleteSingleTodo,
//     allOrder,
//     setAllOrder,
//   }) {
//     const deleteAllDone = async () => {
//       const filteredOutTodos = allOrder.filter(({ done }) => done);
//       const remainingTodos = setAllOrder.filter(({ done }) => !done);
//       const deletePromises = filteredOutTodos.map(({ _id }) => {
//         return deleteSingleTodo(_id);
//       });
//       await Promise.all(deletePromises);
//       setAllOrder(remainingTodos);
//     };
//     const deleteAll = async () => {
//       const deletePromises = allOrder.map(({ _id }) => {
//         return deleteSingleTodo(_id);
//       });
//       await Promise.all(deletePromises);
//       setAllOrder([]);
//     };
//     return (
//       <div>
//         {/* <button onClick={deleteAllDone}>Delete All Done!</button> */}
//         <button onClick={deleteAll}>Delete All!</button>
//       </div>
//     );
//   }