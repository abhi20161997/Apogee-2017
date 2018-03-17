from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from regsoft import views

class RegsoftMiddleware(object):
	"""docstring for RegsoftMiddleware"""
	def process_view(self, request, view_func, view_args, view_kwargs):
		if 'regsoft' not in request.path or request.user.is_superuser:
			return None
		if request.user.is_authenticated():
			if request.path == reverse('regsoft:home') or 'groupcodes' in request.path or 'admin' in request.path:
				return None
			if request.user.username not in request.path:
				return render(request, "regsoft/message.html", {"error" : "You are not allowed to access this page."})
		if not request.user.is_authenticated() and request.path != reverse('regsoft:home'):
			return redirect('regsoft:home')