import { useHabits, type Habit } from "../context/useHabits";
import { Button } from "./Button";
import { format, isFuture, isSameDay, subDays } from "date-fns";

type HabitListProps = {
  visibleDates: Date[];
};

export function HabitList({ visibleDates }: HabitListProps) {
  const { habits } = useHabits();
  if (habits.length === 0) {
    return (
      <p className="text-center text-zinc-500 py-12">
        No habits yet. Add one above to get started!
      </p>
    );
  }
  return (
    <div className="flex flex-col gap-3">
      {habits.map((habit) => (
        <HabitItem key={habit.id} habits={habit} visibleDates={visibleDates} />
      ))}
    </div>
  );
}

type HabitItemProps = {
  habits: Habit;
  visibleDates: Date[];
};

function HabitItem({ habits, visibleDates }: HabitItemProps) {
  const { deleteHabit, toggleHabit } = useHabits();

  const streak = getStreak(habits.completions);

  return (
    <div className="rounded-2xl bg-zinc-800 p-4 flex-col m-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center m-3">
          <span className="font-medium">{habits.name}</span>
          {streak !== 0 && (
            <span className="text-sm text-amber-400">🔥 {streak}</span>
          )}
        </div>
        <Button
          onClick={() => deleteHabit(habits.id)}
          variant="ghost-destructive"
          className="text-sm"
        >
          Delete
        </Button>
      </div>
      <div className="flex gap-3 m-2">
        {visibleDates.map((date) => (
          <Button
            className="flex flex-1 flex-col items-center gap-0.4 rounded-lg text-xs"
            key={date.toISOString()}
            disabled={isFuture(date)}
            variant={
              habits.completions.some((d) => isSameDay(date, d))
                ? "primary"
                : "secondary"
            }
            onClick={() => toggleHabit(habits.id, date)}
          >
            <span className="font-medium">{format(date, "EEE")} </span>
            <span>{format(date, "d")}</span>
          </Button>
        ))}{" "}
      </div>
    </div>
  );
}

function getStreak(completions: Date[]) {
  let streak = 0;
  let date = new Date();

  while (completions.some((c) => isSameDay(c, date))) {
    streak++;
    date = subDays(date, 1);
  }
  return streak;
}
