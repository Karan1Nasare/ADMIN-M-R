import React, { useState } from 'react';
import { Grid, Stack } from '@mui/material';
import { IndeterminateCheckBoxSharp } from '@mui/icons-material';
import ContentCard from '../../ui/Card/ContentCard';
import ProfileImage from '../../../assets/images/profile-image.png';
import ConfirmDelete from '../../ui/Dialog/ConfirmDelete';
import ContentDetailsDialog from '../dialog/ContentDetailsDialog';
import UpdateContentDialog from '../dialog/UpdateContentDialog';
import { cardsData } from '../cardData';
import ContentFilter from '../ContentFilter';

const ChapterTabs = () => {
  const [openView, setOpenView] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const editHandler = row => {
    setOpenEdit(true);
    setSelectedData(row);
  };
  const deleteHandler = row => {
    setOpenDelete(true);
    setSelectedData(row);
  };
  const viewHandler = row => {
    setOpenView(true);
    setSelectedData(row);
  };

  const handleCloseView = () => {
    setOpenView(false);
  };

  const confirmDeleteHandler = () => {
    setOpenDelete(false);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const updateHandler = () => {
    setOpenEdit(false);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  return (
    <>
      <div className='xl:grid xl:grid-cols-3 xl:gap-7 lg:grid lg:grid-cols-2 lg:gap-7 md:grid md:grid-cols-1 md:gap-7 w-full max-w-screen mx-auto'>
        {cardsData?.map((row, index) => {
          return (
            <div
              className=' bg-secondary__fill rounded-md p-7 border border-gray-700'
              key={index}
            >
              <ContentCard
                data={row}
                editHandler={editHandler}
                deleteHandler={deleteHandler}
                viewHandler={viewHandler}
              />
            </div>
          );
        })}
      </div>

      {/* View Dialog */}
      {openView && selectedData && (
        <ContentDetailsDialog
          open={openView}
          handleClose={handleCloseView}
          data={selectedData}
        />
      )}

      {/* Edit Dialog */}
      {openEdit && selectedData && (
        <UpdateContentDialog
          open={openEdit}
          handleClose={handleCloseEdit}
          data={selectedData}
          updateHandler={updateHandler}
        />
      )}

      {/* Delete Dialog Confirmation */}
      <ConfirmDelete
        fullMessage={'Are you sure want to Delete Course ?'}
        title={'Delete Course'}
        handleClose={handleCloseDelete}
        deleteHandler={confirmDeleteHandler}
        open={openDelete}
      />
    </>
  );
};

export default ChapterTabs;
