      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full opacity-10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
