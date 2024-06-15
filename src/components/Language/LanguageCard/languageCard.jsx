import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import EditDialog from '../../ui/Dialog/Language/editDialog';
import ConfirmDelete from '../../ui/Dialog/ConfirmDelete';

const LanguageCard = ({
  title,
  id,
  updateLanguage,
  fetchLanguages,
  deleteLanguage,
}) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const openEditDialog = () => {
    setIsEditOpen(true);
  };

  const closeEditDialog = () => {
    setIsEditOpen(false);
  };

  const confirmDeleteHandler = () => {
    setOpenDelete(false);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const openDeleteDialog = () => {
    setOpenDelete(true);
  };

  return (
    <div className=' flex flex-col justify-center'>
      <div className='flex gap-5 p-5 w-full rounded-xl border border-gray-700 border-solid bg-secondary__fill'>
        <div className='my-auto text-sm leading-5 text-white'>{title}</div>
        <div className='flex flex-1 justify-end gap-2.5 ml-auto'>
          <Icon
            icon={'lucide:edit'}
            className='text-white'
            onClick={openEditDialog}
          />
          <Icon
            icon={'material-symbols:delete'}
            className='text-danger'
            onClick={openDeleteDialog}
          />
        </div>
      </div>
      <EditDialog
        updateLanguage={updateLanguage}
        fetchLanguages={fetchLanguages}
        isOpen={isEditOpen}
        onClose={closeEditDialog}
        heading='Edit Language'
        title={title}
        id={id}
      />
      <ConfirmDelete
        id={id}
        deleteLanguage={deleteLanguage}
        fullMessage={'Are you sure want to Delete Language ?'}
        title={`Delete ${title}`}
        handleClose={handleCloseDelete}
        deleteHandler={confirmDeleteHandler}
        open={openDelete}
      />
    </div>
  );
};

export default LanguageCard;
