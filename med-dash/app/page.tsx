"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { Calendar } from "@/components/ui/calendar"

export function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Print... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find...</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            Always Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Reload <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Toggle Fullscreen</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}


export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate);
  };
  
  const cardData = [
    { title: "Systolic Pressure", description: "Current", avg: "avg", max: "max", min: "min", color: "lightblue" },
    { title: "Diastolic Pressure", description: "Current", avg: "avg", max: "max", min: "min", color: "lightpink" },
    { title: "HRV CV", description: "Current", avg: "avg", max: "max", min: "min", color: "lightgreen" },
    { title: "HRV - Sleep", description: "Current", avg: "avg", max: "max", min: "min", color: "lightyellow" },
    { title: "Temp Deviation", description: "Current", avg: "avg", max: "max", min: "min", color: "lightblue" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="w-full flex justify-between">
      {/* Menubar aligned to the top left */}
      <MenubarDemo />

     {/* Calendar */}
     <Calendar
      mode="single"
      selected={date}
      onSelect={handleDateChange}
      showWeekNumber
      weekStartsOn={2} // Tuesday as first day of the week
      firstWeekContainsDate={4} // Number the first week of the year from day 4
      formatters={{
        formatWeekNumber: (weekNumber) => `W${weekNumber}`, // Add `W` prefix to week number
      }}
      className="rounded-md border my-4" // Additional margin for spacing
    />
      </div>
      {/* Flex Container for All Cards */}
      <div className="flex flex-wrap justify-center gap-4">
        {cardData.map((card, index) => (
          <Card key={index} style={{ backgroundColor: card.color, flexBasis: 'calc(20% - 1rem)', flexGrow: 0, flexShrink: 0, maxWidth: 'calc(20% - 1rem)' }}>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Avg: {card.avg}</p>
              <p>Max: {card.max}</p>
              <p>Min: {card.min}</p>
            </CardContent>
            <CardFooter>
              <p>Additional Info</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}

