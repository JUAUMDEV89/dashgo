import { Button } from '@chakra-ui/react';

interface PaginationItemProps{
  number: number;
  isCurrent: boolean;
}

export function PaginationItem({ number,  isCurrent}: PaginationItemProps){
    return(
        
      <Button
      size='sm'
      fontSize="xs"
      width="4"
      colorScheme="pink"
      disabled
      _disabled={{
        bgColor: 'pink.500',
        cursor: 'default'
      }}
    >
      { number }
    </Button>
    )
}