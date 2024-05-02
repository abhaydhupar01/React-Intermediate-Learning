import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodos";
import axios from "axios";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Todo>('/todos');

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();
    
    return useMutation<Todo, Error, Todo>({
        mutationFn: (todo: Todo) => apiClient.post(todo),
        
        onSuccess: (savedTodo, newTodo) => {
        // Now we should tell react to update the cache. This doesn't work for json placeholder as data is not updated there. So nothing will come after fetching
        // Approach : Invalidating the cahce
        // queryClient.invalidateQueries({
        // queryKey: ['todos']     // This will invalidate all data whose queryKey is todos
        // })

        // Approach 2: Update the data in cache directly
        queryClient.setQueriesData<Todo[]>(["todos"], (todos) => [
            savedTodo,
            ...(todos || []),
        ]);

        // adding callback to remove value from field input
        onAdd();
        },
    });
}

export default useAddTodo;