import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import publicRequest from '../../../services/publicRequest';

const Reason = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('authUser') ? JSON.parse(localStorage.getItem('authUser')).token : null;
    if (token) {
      const authenticatedRequest = axios.create({
        baseURL: publicRequest.defaults.baseURL,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      authenticatedRequest.get('/api/reason')
        .then((response) => {
          console.log("responsesds", response);
          const data = response.data;
          if (data && data.data && data.data.reasonData) {
            setPartners(data.data.reasonData); // Corrected the path to reasonData
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    } else {
      console.log('Token not found in localStorage');
    }
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Reason</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {partners.map((partner) => (
            <TableRow key={partner.id}>
              <TableCell>{partner.description}</TableCell> {/* Corrected to use 'description' */}
              <TableCell>
                <FaEdit style={{ cursor: 'pointer', marginRight: '8px' }} />
                <FaTrash style={{ cursor: 'pointer' }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Reason;
