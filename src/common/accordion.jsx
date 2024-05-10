"use client";

import { Accordion } from "flowbite-react";

export function AccordionBar() {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>Download and Installation </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ipsum est? Doloremque
            facere ex, explicabo asperiores perferendis voluptates minus esse, hic incidunt natus
            ut! Sunt quasi assumenda enim possimus illo.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Registration </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ipsum est? Doloremque
            facere ex, explicabo asperiores perferendis voluptates minus esse, hic incidunt natus
            ut! Sunt quasi assumenda enim possimus illo.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Setting up a business profile</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ipsum est? Doloremque
            facere ex, explicabo asperiores perferendis voluptates minus esse, hic incidunt natus
            ut! Sunt quasi assumenda enim possimus illo.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Inviting a business partner </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ipsum est? Doloremque
            facere ex, explicabo asperiores perferendis voluptates minus esse, hic incidunt natus
            ut! Sunt quasi assumenda enim possimus illo.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Profile verification</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ipsum est? Doloremque
            facere ex, explicabo asperiores perferendis voluptates minus esse, hic incidunt natus
            ut! Sunt quasi assumenda enim possimus illo.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Business profile verification </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ipsum est? Doloremque
            facere ex, explicabo asperiores perferendis voluptates minus esse, hic incidunt natus
            ut! Sunt quasi assumenda enim possimus illo.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
