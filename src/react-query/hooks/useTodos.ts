import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Todo>('/todos');

export interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
  }

const useTodos = () => {
    
    return useQuery<Todo[], Error>({
        queryKey: ["todos"],
        queryFn: apiClient.getAll,
        staleTime: 10* 1000 //10sec
      })
}

export default useTodos;