import { Modal, Box, Typography } from "@mui/material"

interface RemoveItemModalProps {
  isOpen: boolean,
  onClose: () => void
}

export const RemoveItemModal = ({ isOpen, onClose }: RemoveItemModalProps) => (
  <Modal open={isOpen} onClose={onClose} sx={{width: "400px"}}>
    <Box>
      <Typography>BEBRA</Typography>
    </Box>
  </Modal>
)