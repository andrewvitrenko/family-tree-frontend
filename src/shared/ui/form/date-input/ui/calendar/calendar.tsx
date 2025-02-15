import { FC, memo } from 'react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/shared/lib/utils';
import { buttonVariants } from '@/shared/ui/button';

import { Chevron } from '../chevron';
import { TCalendarProps } from './model/props.model';

export const Calendar: FC<TCalendarProps> = memo(
  ({ className, classNames, showOutsideDays = true, ...props }) => {
    return (
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn('p-3', className)}
        classNames={{
          months: 'flex max-sm:flex-col max-sm:space-y-4 relative',
          month: 'space-y-4',
          month_caption: 'flex justify-center h-7 relative items-center',
          caption_label: 'text-sm leading-none font-medium',
          nav: 'absolute top-0 w-full left-0 flex justify-between items-center',
          button_next: cn(
            buttonVariants({ variant: 'outline' }),
            'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 z-10',
          ),
          button_previous: cn(
            buttonVariants({ variant: 'outline' }),
            'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 z-10',
          ),
          month_grid: 'w-full border-collapse space-y-1',
          weekdays: 'flex',
          weekday:
            'text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]',
          week: 'flex w-full mt-2',
          day: cn(
            'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md',
            props.mode === 'range'
              ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
              : '[&:has([aria-selected])]:rounded-md',
          ),
          day_button: cn(
            buttonVariants({ variant: 'ghost' }),
            'h-8 w-8 p-0 rounded-md font-normal aria-selected:opacity-100',
          ),
          range_start: 'day-range-start',
          range_end: 'day-range-end',
          selected:
            'bg-primary rounded-md text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
          today: 'bg-accent rounded-md text-accent-foreground',
          outside:
            'day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground',
          disabled: 'text-muted-foreground opacity-50',
          range_middle:
            'aria-selected:bg-accent aria-selected:text-accent-foreground',
          hidden: 'invisible',
          ...classNames,
        }}
        components={{
          Chevron: (props) => <Chevron {...props} />,
        }}
        {...props}
      />
    );
  },
);

Calendar.displayName = 'Calendar';
