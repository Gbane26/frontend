/**
 * @todo YOU HAVE TO IMPLEMENT THE DELETE AND SAVE TASK ENDPOINT, A TASK CANNOT BE UPDATED IF THE TASK NAME DID NOT CHANGE, YOU'VE TO CONTROL THE BUTTON STATE ACCORDINGLY
 */
import { Check, Delete } from '@mui/icons-material';
import { Box, Button, Container, IconButton, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch.ts';
import { Task } from '../index';

const TodoPage = () => {
  const api = useFetch();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editedTasks, setEditedTasks] = useState<Record<number, string>>({});
  const [newTaskName, setNewTaskName] = useState('');

  const handleFetchTasks = async () => {
    const data = await api.get('/tasks');
    setTasks(data);
  };

  const handleDelete = async (id: number) => {
    await api.delete(`/tasks/${id}`);
    handleFetchTasks();
  };

  const handleSave = async (id: number) => {
    const updatedName = editedTasks[id];
    const originalTask = tasks.find((t) => t.id === id);

    if (updatedName && updatedName !== originalTask?.name) {
      await api.patch(`/tasks/${id}`, {id, name: updatedName });
      setEditedTasks((prev) => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
      handleFetchTasks();
    }
  };

  const handleAddTask = async () => {
    if (!newTaskName.trim()) return;
    const newTask = await api.post('/tasks', { name: newTaskName });
    setTasks((prev) => [...prev, newTask]);
    setNewTaskName('');
  };

  useEffect(() => {
    handleFetchTasks();
  }, []);

  return (
    <Container>
      <Box display="flex" justifyContent="center" mt={5}>
        <Typography variant="h4">HDM Todo List</Typography>
      </Box>

      {/* Ajouter une nouvelle tâche */}
      <Box display="flex" justifyContent="center" alignItems="center" mt={4} gap={2}>
        <TextField
          label="Nouvelle tâche"
          variant="outlined"
          size="small"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          sx={{ width: '300px' }}
        />
        <Button variant="contained" onClick={handleAddTask}>Ajouter</Button>
      </Box>

      {/* Liste des tâches */}
      <Box mt={5} display="flex" flexDirection="column" alignItems="center">
        {tasks.map((task) => {
          const editedName = editedTasks[task.id] ?? task.name;
          const hasChanged = editedName !== task.name;

          return (
            <Box
              key={task.id}
              display="flex"
              alignItems="center"
              gap={1}
              mt={2}
              width="100%"
              maxWidth={500}
            >
              <TextField
                size="small"
                fullWidth
                value={editedName}
                onChange={(e) =>
                  setEditedTasks((prev) => ({ ...prev, [task.id]: e.target.value }))
                }
              />
              <IconButton
                color="success"
                disabled={!hasChanged}
                onClick={() => handleSave(task.id)}
              >
                <Check />
              </IconButton>
              <IconButton
                color="error"
                onClick={() => handleDelete(task.id)}
              >
                <Delete />
              </IconButton>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default TodoPage;
