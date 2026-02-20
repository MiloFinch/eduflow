"use client";

import React, { useState } from "react";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────
interface Note {
  id: number;
  timestamp: string;
  text: string;
}

interface Lesson {
  id: string;
  title: string;
  status: "completed" | "current" | "upcoming" | "locked";
}

interface Module {
  id: number;
  title: string;
  expanded: boolean;
  locked: boolean;
  lessons: Lesson[];
}

// ─── Data ────────────────────────────────────────────────────────────
const modules: Module[] = [
  {
    id: 1,
    title: "Module 1: Getting Started",
    expanded: true,
    locked: false,
    lessons: [
      { id: "1.1", title: "Introduction to UI", status: "completed" },
      { id: "1.2", title: "Design Systems Overview", status: "completed" },
      { id: "1.3", title: "Setup Your Environment", status: "current" },
      { id: "1.4", title: "Creating Your First Grid", status: "upcoming" },
    ],
  },
  {
    id: 2,
    title: "Module 2: Advanced Layouts",
    expanded: false,
    locked: true,
    lessons: [],
  },
];

const initialNotes: Note[] = [
  {
    id: 1,
    timestamp: "05:12",
    text: "Remember to check the npm version before installing the design-token CLI tool.",
  },
  {
    id: 2,
    timestamp: "12:34",
    text: "This part explains why we use the 8pt grid system. Essential for responsiveness.",
  },
  {
    id: 3,
    timestamp: "28:45",
    text: "The shortcut Cmd+Opt+K for components will save a lot of time later.",
  },
];

// ─── Component ───────────────────────────────────────────────────────
export default function LessonPlayerPage() {
  const [activeTab, setActiveTab] = useState<"notes" | "discussion">("notes");
  const [notes] = useState<Note[]>(initialNotes);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-[#f5f5f7] font-[Inter,sans-serif] text-slate-900 selection:bg-[#6961ff]/30">
      {/* ── Top Navigation ── */}
      <header className="z-50 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white/80 px-6 backdrop-blur-md">
        <div className="flex items-center gap-6">
          <Link
            href="/dashboard"
            className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-100"
          >
            <span className="material-symbols-outlined text-xl">arrow_back</span>
            <span>Back</span>
          </Link>
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <span className="cursor-pointer transition-colors hover:text-[#6961ff]">
              Course Title
            </span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="cursor-pointer transition-colors hover:text-[#6961ff]">
              Module 1
            </span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="font-semibold text-slate-900">Lesson 1.3</span>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <p className="text-sm font-semibold">Alex Johnson</p>
            <p className="text-[10px] uppercase tracking-wider text-slate-400">
              Pro Student
            </p>
          </div>
          <div className="size-10 overflow-hidden rounded-full ring-2 ring-[#6961ff]/20">
            {/* TODO: Replace with real avatar */}
            <div className="flex h-full w-full items-center justify-center bg-[#6961ff]/10 text-sm font-bold text-[#6961ff]">
              AJ
            </div>
          </div>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="flex flex-1 overflow-hidden">
        {/* ── Curriculum Sidebar (Left) ── */}
        <aside
          className="z-40 w-[320px] flex-shrink-0 overflow-y-auto border-r border-slate-200/50 p-4 shadow-xl"
          style={{
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          <div className="mb-6 px-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Curriculum
            </h3>
          </div>

          {modules.map((mod) => (
            <div key={mod.id} className={`mb-6 space-y-1 ${mod.locked ? "opacity-60" : ""}`}>
              <div className="flex items-center justify-between px-2 py-2 text-sm font-bold text-slate-800">
                <span>{mod.title}</span>
                <span className="material-symbols-outlined text-slate-400">
                  {mod.locked ? "lock" : "expand_more"}
                </span>
              </div>

              {mod.expanded && (
                <div className="space-y-1">
                  {mod.lessons.map((lesson) => {
                    if (lesson.status === "completed") {
                      return (
                        <button
                          key={lesson.id}
                          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-white/50"
                          aria-label={`Go to lesson ${lesson.id} ${lesson.title} (completed)`}
                        >
                          <span className="material-symbols-outlined text-lg text-emerald-500">
                            check_circle
                          </span>
                          <span className="flex-1 truncate text-left">
                            {lesson.id} {lesson.title}
                          </span>
                        </button>
                      );
                    }
                    if (lesson.status === "current") {
                      return (
                        <div
                          key={lesson.id}
                          className="flex items-center gap-3 rounded-xl bg-[#6961ff] px-3 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6961ff]/30"
                        >
                          <span className="material-symbols-outlined text-lg text-white">
                            play_circle
                          </span>
                          <span className="flex-1 truncate">
                            {lesson.id} {lesson.title}
                          </span>
                        </div>
                      );
                    }
                    // upcoming
                    return (
                      <button
                        key={lesson.id}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-white/50"
                        aria-label={`Go to lesson ${lesson.id} ${lesson.title}`}
                      >
                        <span className="material-symbols-outlined text-lg text-slate-300">
                          radio_button_unchecked
                        </span>
                        <span className="flex-1 truncate text-left">
                          {lesson.id} {lesson.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </aside>

        {/* ── Central Content Area ── */}
        <section className="flex flex-1 flex-col overflow-y-auto">
          <div className="p-8">
            {/* Video Container */}
            <div className="group relative aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl">
              {/* TODO: Replace with real <video> element */}
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
                <span className="material-symbols-outlined text-6xl text-white/20">
                  smart_display
                </span>
              </div>

              {/* Video Controls (Glassmorphic) */}
              <div
                className="absolute inset-x-0 bottom-0 flex flex-col p-4 text-white"
                style={{
                  background: "rgba(16,15,35,0.6)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {/* Seek Bar */}
                <div className="relative mb-4 h-1.5 w-full cursor-pointer rounded-full bg-white/20">
                  <div
                    className="absolute left-0 h-full w-1/4 rounded-full bg-[#2dd4bf]"
                    style={{ boxShadow: "0 0 10px rgba(45,212,191,0.6)" }}
                  />
                  <div className="absolute left-1/4 -top-1 size-3.5 rounded-full border-2 border-[#2dd4bf] bg-white shadow-lg" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      className="material-symbols-outlined text-2xl transition-colors hover:text-[#2dd4bf]"
                      onClick={() => setIsPlaying(!isPlaying)}
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? "pause" : "play_arrow"}
                    </button>
                    <button
                      className="material-symbols-outlined text-2xl transition-colors hover:text-[#2dd4bf]"
                      aria-label="Next"
                    >
                      skip_next
                    </button>
                    <button
                      className="material-symbols-outlined text-xl transition-colors hover:text-[#2dd4bf]"
                      aria-label="Volume"
                    >
                      volume_up
                    </button>
                    <span className="text-xs font-medium tabular-nums text-slate-300">
                      12:34 / 45:00
                    </span>
                  </div>

                  <div className="flex items-center gap-5">
                    <button className="text-xs font-bold transition-colors hover:text-[#2dd4bf]">
                      1x
                    </button>
                    <button className="text-xs font-bold transition-colors hover:text-[#2dd4bf]">
                      1080p
                    </button>
                    <button
                      className="material-symbols-outlined text-xl transition-colors hover:text-[#2dd4bf]"
                      aria-label="Settings"
                    >
                      settings
                    </button>
                    <button
                      className="material-symbols-outlined text-xl transition-colors hover:text-[#2dd4bf]"
                      aria-label="Fullscreen"
                    >
                      fullscreen
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Lesson Info */}
            <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                  Setup Your Environment
                </h1>
                <div className="mt-4 flex items-center gap-3">
                  {/* TODO: Replace with real instructor avatar */}
                  <div className="flex size-10 items-center justify-center rounded-full bg-[#2dd4bf]/20 text-sm font-bold text-[#2dd4bf]">
                    AK
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Anna Kowalska</p>
                    <p className="text-xs text-slate-500">
                      Senior UI Designer &amp; Lead Instructor
                    </p>
                  </div>
                </div>
                <div className="mt-6 text-sm leading-relaxed text-slate-600">
                  <p>
                    In this lesson, we&apos;ll configure your local workspace for maximum
                    efficiency. We&apos;ll cover the essential plugins for VS Code, terminal
                    customizations, and setting up the design-to-code workflow that we&apos;ll
                    use throughout the rest of this module.
                  </p>
                </div>
              </div>

              {/* Lesson Resources */}
              <div className="w-full lg:w-72">
                <h3 className="text-sm font-bold text-slate-900">Lesson Resources</h3>
                <div className="mt-3 space-y-2">
                  <button className="flex w-full items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 transition-shadow hover:shadow-md">
                    <div className="flex size-10 items-center justify-center rounded bg-red-50 text-red-500">
                      <span className="material-symbols-outlined">picture_as_pdf</span>
                    </div>
                    <div className="overflow-hidden text-left">
                      <p className="truncate text-xs font-bold">Setup_Guide.pdf</p>
                      <p className="text-[10px] text-slate-400">2.4 MB</p>
                    </div>
                  </button>
                  <button className="flex w-full items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 transition-shadow hover:shadow-md">
                    <div className="flex size-10 items-center justify-center rounded bg-blue-50 text-blue-500">
                      <span className="material-symbols-outlined">folder_zip</span>
                    </div>
                    <div className="overflow-hidden text-left">
                      <p className="truncate text-xs font-bold">Config_Files.zip</p>
                      <p className="text-[10px] text-slate-400">15.8 MB</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Notes / Discussion Sidebar (Right) ── */}
        <aside
          className="z-40 flex w-[320px] flex-shrink-0 flex-col border-l border-slate-200/50 shadow-xl"
          style={{
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          {/* Tabs */}
          <div className="flex items-center border-b border-slate-200">
            <button
              className={`flex-1 py-4 text-sm font-bold transition-colors ${
                activeTab === "notes"
                  ? "border-b-2 border-[#6961ff] text-[#6961ff]"
                  : "text-slate-400 hover:text-slate-600"
              }`}
              onClick={() => setActiveTab("notes")}
            >
              My Notes
            </button>
            <button
              className={`flex-1 py-4 text-sm font-medium transition-colors ${
                activeTab === "discussion"
                  ? "border-b-2 border-[#6961ff] text-[#6961ff]"
                  : "text-slate-400 hover:text-slate-600"
              }`}
              onClick={() => setActiveTab("discussion")}
            >
              Discussion
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {activeTab === "notes" && (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400">
                    {notes.length} NOTES IN THIS LESSON
                  </span>
                  <button className="flex items-center gap-1 rounded-lg bg-[#2dd4bf]/10 px-2 py-1 text-[10px] font-bold text-[#2dd4bf] transition-colors hover:bg-[#2dd4bf]/20">
                    <span className="material-symbols-outlined text-sm">add</span>
                    ADD NOTE
                  </button>
                </div>

                <div className="space-y-3">
                  {notes.map((note) => (
                    <div
                      key={note.id}
                      className="group rounded-xl bg-white/50 p-3 shadow-sm transition-all hover:bg-white hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <span className="rounded bg-slate-900 px-1.5 py-0.5 font-mono text-[10px] font-bold text-white">
                          {note.timestamp}
                        </span>
                        <div className="flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                          <button
                            className="material-symbols-outlined text-sm text-slate-400 hover:text-[#6961ff]"
                            aria-label={`Edit note at ${note.timestamp}`}
                          >
                            edit
                          </button>
                          <button
                            className="material-symbols-outlined text-sm text-slate-400 hover:text-red-500"
                            aria-label={`Delete note at ${note.timestamp}`}
                          >
                            delete
                          </button>
                        </div>
                      </div>
                      <p className="mt-2 text-xs leading-normal text-slate-600">
                        {note.text}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === "discussion" && (
              <div className="space-y-4">
                <span className="text-xs font-bold text-slate-400">5 COMMENTS</span>
                <div className="rounded-xl bg-white/50 p-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex size-8 items-center justify-center rounded-full bg-[#6961ff]/10 text-xs font-bold text-[#6961ff]">
                      MK
                    </div>
                    <div>
                      <p className="text-xs font-semibold">Maria Kamińska</p>
                      <p className="text-[10px] text-slate-400">2 hours ago</p>
                    </div>
                  </div>
                  <p className="mt-2 text-xs leading-normal text-slate-600">
                    Great explanation! Can you clarify the part about the design-token CLI
                    integration with VS Code?
                  </p>
                  <div className="mt-2 flex gap-3">
                    <button className="text-[10px] font-semibold text-slate-400 hover:text-[#6961ff]">
                      Reply
                    </button>
                    <button className="text-[10px] font-semibold text-slate-400 hover:text-[#6961ff]">
                      Like
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </aside>
      </main>

      {/* ── Bottom Navigation (Floating Glassmorphic) ── */}
      <footer className="absolute inset-x-0 bottom-6 z-50 flex justify-center px-4">
        <div
          className="flex items-center gap-6 rounded-2xl px-6 py-4 shadow-2xl"
          style={{
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          <button className="flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-800">
            <span className="material-symbols-outlined">arrow_back_ios</span>
            Previous Lesson
          </button>
          <button className="flex min-w-[200px] items-center justify-center gap-2 rounded-xl bg-[#6961ff] px-8 py-3 font-bold text-white shadow-lg shadow-[#6961ff]/30 transition-transform active:scale-95">
            Mark as Complete
            <span className="material-symbols-outlined text-lg">check</span>
          </button>
          <button className="flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-800">
            Next Lesson
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
