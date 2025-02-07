import React, { useState } from "react"
import { Pencil } from 'lucide-react'
import { Button } from "../../components/button"
import { Card, CardHeader, CardTitle, CardContent } from "../../components/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/carousel"
import { DatePickerWithPresets } from '../../components/datepick'
import {EntryForm} from './DiaryEntryAdd'
import DiaryEntryList from '../../components/sampleEntries.json'

function DiaryEntries() {

  // Used for the add entry feature
  const [showEntryForm, setShowEntryForm] = useState(false);
  const [entries, setEntries] = useState(DiaryEntryList);

  const toggleEntryForm = () => {
    setShowEntryForm(!showEntryForm);
  };

  const handleFormSubmit = (newEntry) => {
    setEntries([...entries, newEntry]); //Possible error: appends new entry to end of array so may not be in chronological order
    setShowEntryForm(false);
  };

  // Used for the edit entry feature
  const [editedEntries, setEditedEntries] = useState(entries.map(entry => entry.entry));
  const [isEditing, setIsEditing] = useState(Array(entries.length).fill(false));

  const handleEntryChange = (index, newValue) => {
    setEditedEntries(prevEntries => {
      const newEntries = [...prevEntries];
      newEntries[index] = newValue;
      return newEntries;
    });
  };

  const handleSave = (index) => {
    entries[index].entry = editedEntries[index];
    setEditedEntries(entries.map(entry => entry.entry));
    setIsEditing(prevState => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  const handleEditClick = (index) => {
    setIsEditing(prevState => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <div>

        {showEntryForm ? null : (
          <Carousel className="w-full max-w-xl">
            <CarouselContent>
              {entries.map((entry,index) => (
                <CarouselItem key={entry.timestamp}>
                  <div className="p-1">
                    <Card className="bg-white">
                      <CardHeader>
                          <CardTitle className="flex justify-around p-6">
                            <DatePickerWithPresets givenDate={new Date(entry.timestamp)} />
                            {!isEditing[index] && <Button className="border w-min" onClick={() => handleEditClick(index)}><Pencil /></Button>}
                          </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col aspect-[5/3] p-6">
                        <span>{entry.entry}</span>
                        {isEditing[index] && (
                          <textarea
                            className="mt-4 p-2 border border-gray-300 rounded-md w-full"
                            value={editedEntries[index]}
                            onChange={(e) => handleEntryChange(index, e.target.value)}
                          />
                        )}
                        <div className="mt-4">
                          {isEditing[index] && 
                            <Button className="bg-blue-500 text-white" onClick={() => handleSave(index)}>Save</Button>
                          }
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white"/>
            <CarouselNext className="bg-white"/>
          </Carousel>
        )}
      </div>

      {showEntryForm ? (
        <EntryForm onSubmit={handleFormSubmit} />
      ) : (
        <div className="flex space-x-4">
          <Button className="bg-blue-500 text-white" onClick={toggleEntryForm}>Add Entry</Button>
        </div>
      )}
    </div>
  );
}

export default DiaryEntries